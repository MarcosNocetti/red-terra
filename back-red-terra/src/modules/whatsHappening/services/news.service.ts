import { Injectable } from '@nestjs/common';
import { NewsEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { NewsRepository } from '../infra/repositories';
import { UpdateNewsDto } from '../interfaceAdapters/dto';
import { INews } from '../interfaces';
import { NewsRelationRepository } from '../infra/repositories/newsRelation.repository';

@Injectable()
export class NewsService {
  constructor(
    private readonly newsRepository: NewsRepository,
    private readonly newsRelationRepository: NewsRelationRepository,
  ) {}

  async create(
    data: INews,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<NewsEntity>, 'statusCode'>
    >
  > {
    const { language, relationId, ...news } = data;

    if (news.isRedCarta && !news.monthYear) {
      return failure({
        data: 'Red Carta month year',
        message: 'Must pass an month year',
        success: false,
      });
    }

    if (
      relationId &&
      !(await this.newsRepository.findRegister({ id: relationId }))
    ) {
      return failure({
        data: `News ${relationId} does not exists`,
        message: `News ${relationId} does not exists`,
        success: false,
      });
    }

    const newNews = await this.newsRepository.save({
      ...news,
      language,
    });
    if (relationId?.length) {
      this.newsRelationRepository.save({
        newsBrId: language === 'br' ? newNews.id : relationId,
        newsEnId: language === 'en' ? newNews.id : relationId,
      });
    } else {
      this.newsRelationRepository.save({
        [language === 'br' ? 'newsBrId' : 'newsEnId']: newNews.id,
      });
    }

    return success({
      data: newNews,
      message: 'News created successfuly',
      success: true,
    });
  }

  async delete(
    newsId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<NewsEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!newsId?.length) {
      return failure({
        data: 'News id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (!(await this.newsRepository.findRegister({ id: newsId }))) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${newsId} does not exist`,
        success: false,
      });
    }

    const relation = await this.newsRelationRepository.findRegister([
      { newsEnId: newsId },
      { newsBrId: newsId },
    ]);

    if (relation) {
      await this.newsRelationRepository.delete(relation.id);
    }

    const deletedId = await this.newsRepository.delete(newsId);

    return success({
      data: deletedId,
      message: 'News deleted successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<NewsEntity[]>, 'statusCode'>
    >
  > {
    const news = await this.newsRepository.findRegisters();

    if (!news) {
      return failure({
        message: 'No news found',
        success: false,
      });
    }

    return success({
      data: news,
      message: 'News found successfully',
      success: true,
    });
  }

  async getByWhatsHappening(
    whatsHappeningId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<NewsEntity>, 'statusCode'>
    >
  > {
    const news = await this.newsRepository.findRegister({
      whatsHappeningId,
    });

    if (!news) {
      return failure({
        message: 'No news found',
        success: false,
      });
    }

    return success({
      data: news,
      message: 'News found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateNewsDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<NewsEntity>, 'statusCode'>
    >
  > {
    const { id, relationId, language, ...updatedNews } = data;

    const newsExists = await this.newsRepository.findRegister({
      id,
    });

    if (!newsExists) {
      return failure({
        message: 'No news found',
        success: false,
      });
    }

    const relation = await this.newsRelationRepository.findRegister({
      [language === 'br' ? 'newsBrId' : 'newsEnId']: id,
    });

    if (relationId !== undefined && relationId?.length) {
      if (
        !(await this.newsRelationRepository.findRegister([
          { newsBrId: relationId },
          { newsEnId: relationId },
        ]))
      ) {
        this.newsRelationRepository.save({
          newsBrId: language === 'br' ? id : relationId,
          newsEnId: language === 'en' ? id : relationId,
        });
      } else if (
        !(await this.newsRepository.findRegister({ id: relationId }))
      ) {
        return failure({
          data: `News relation does not exists`,
          message: `News relation does not exists`,
          success: false,
        });
      }
    } else if (relation) {
      await this.newsRelationRepository.save({
        id: relation.id,
        [language === 'br' ? 'newsBrId' : 'newsEnId']: id,
        [language !== 'br' ? 'newsBrId' : 'newsEnId']: null,
      });
    } else {
      await this.newsRelationRepository.save({
        [language === 'br' ? 'newsBrId' : 'newsEnId']: id,
        [language !== 'br' ? 'newsBrId' : 'newsEnId']: null,
      });
    }

    const news = await this.newsRepository.save({
      ...newsExists,
      ...updatedNews,
    });

    return success({
      data: news,
      message: 'News updated successfully',
      success: true,
    });
  }
}
