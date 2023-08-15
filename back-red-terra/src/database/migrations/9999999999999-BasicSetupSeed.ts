// import { IFooter } from '../../modules/footer/interfaces';
// import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
// import { IHeaderEntity } from 'src/modules/headers/interfaces';
// import { IHomeEntity } from 'src/modules/home/interfaces';
// import {
//   ICreditsEntity,
//   IWhatWeDoEntity,
// } from 'src/modules/whatWeDo/interfaces';

// const Footers: Omit<IFooter, 'links'> = {
//   language: 'en',
//   copyright: '©2022 by Red Earth Studios.',
// };

// const Headers: Omit<IHeaderEntity, 'id' | 'createdAt' | 'updatedAt'>[] = [
//   {
//     imageUrl: 'https://picsum.photos/200/300',
//     textColor: '#343A40',
//     backgroundColor: '#fff',
//   },
//   {
//     imageUrl: 'https://picsum.photos/200/300',
//     textColor: '#F8F9FA',
//     backgroundColor:
//       'linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);  ',
//   },
// ];

// const Home: Omit<IHomeEntity, 'id' | 'createdAt' | 'updatedAt'> = {
//   videoUrl: 'https://www.youtube.com/watch?v=NpEaa2P7qZI',
// };

// const WhatWeDo: Omit<IWhatWeDoEntity, 'id' | 'createdAt' | 'updatedAt'>[] = [
//   {
//     bannerUrl: 'https://picsum.photos/200/300',
//     language: 'en',
//     title: 'What we do',
//     text: 'RED EARTH create, develop and produce scripted, factual and entertainment programming. The team have all experienced first-hand recent Brazilian history. Passionate about their country, their approach is thorough narrative integrity and special access. Unafraid to expose the truth, their storytelling is inspiring, knowledgeable and passionate. The Red Earth development slate is available on request. In parallel, they believe in world class Production Services. Through 20 years of experience across genres, they understand the complexities of producing in Brazil and throughout South America where the company enjoy established partnerships. With their insider network and knowledge, they work closely with their clients on all production touchpoints including risk management, due diligence, permits, legal and finance. Approachable with a can-do attitude to any request. This extends to our brand work, we create and deliver global marketing campaigns via screen and multi-platform activations including events and concerts.',
//     creditTitle: 'Additional credits',
//     headerId: '2',
//   },
//   {
//     bannerUrl: 'https://picsum.photos/200/300',
//     language: 'br',
//     title: 'O que fazemos',
//     text: 'A RED EARTH cria, desenvolve e produz programação roteirizada, factual e de entretenimento. A equipe viveu em primeira mão a história recente do Brasil. Apaixonados por seu país, sua abordagem é a integridade narrativa completa e o acesso especial. Sem medo de expor a verdade, sua narrativa é inspiradora, experiente e apaixonada. A ardósia de desenvolvimento Red Earth está disponível mediante solicitação. Paralelamente, eles acreditam em Serviços de Produção de classe mundial. Através de 20 anos de experiência em vários gêneros, eles entendem as complexidades da produção no Brasil e em toda a América do Sul onde a empresa mantém parcerias estabelecidas. Com sua rede e conhecimento internos, eles trabalham em estreita colaboração com seus clientes em todos os pontos de contato da produção, incluindo gerenciamento de riscos, due diligence, licenças, jurídico e financeiro. Acessível com uma atitude positiva para qualquer solicitação. Isso se estende ao nosso trabalho de marca, criamos e entregamos campanhas de marketing globais por meio de ativações de tela e multiplataforma, incluindo eventos e shows.',
//     creditTitle: 'Créditos adicionais',
//     headerId: '2',
//   },
// ];

// const Credits: Omit<ICreditsEntity, 'id' | 'createdAt' | 'updatedAt'>[] = [
//   {
//     subtitle: 'CAPTIVE',
//     text: 'Netflix series on the most dramatic kidnaps of all time, produced by Simon Chin. Brazil episode tells the story of coca cola president who developed Stockholm syndrome for her captor.',
//     language: 'en',
//     whatWeDoId: '1',
//   },
//   {
//     subtitle: 'Last Chance to see',
//     text: 'Stephen Fry goes in search of the Amazonian river manatees who are on the verge of extinction.',
//     language: 'en',
//     whatWeDoId: '1',
//   },
//   {
//     subtitle: 'STREET KINGS in Jail',
//     text: 'Edward Van Gils, the world’s greatest street footballer and former world champion, Gilberto Silva (Libertadores champion Atletico Mineiro 2014) go into sao Paulo jail to share life, football and experience with the inmates.',
//     language: 'en',
//     whatWeDoId: '1',
//   },
//   {
//     subtitle: 'Web of Lies',
//     text: 'New crimes via the internet take us to the case of an American man duped into a false romantic relationship with a Brazilian woman who ends of killing him when their lives begin to fall apart.',
//     language: 'en',
//     whatWeDoId: '1',
//   },
//   {
//     subtitle: 'Noisey Funk',
//     text: 'Vice team infiltrates into the Funk movement in Sao Paulo and tries to find out why their DJs are being assassinated. Is it some serial killer or, in fact, the police themselves?(VICE Brazil)',
//     language: 'en',
//     whatWeDoId: '1',
//   },
//   {
//     subtitle: 'Freerider',
//     text: 'Reality show drops couples into the middle of nowhere and they have to get home on one dollar.',
//     language: 'en',
//     whatWeDoId: '1',
//   },
//   {
//     subtitle: 'Dope 3',
//     text: 'Drugs gangs in ro, the police and the terrible ever decreasing circle of a wat that can never be won.',
//     language: 'en',
//     whatWeDoId: '1',
//   },
//   {
//     subtitle: 'Locked Up Abroad',
//     text: 'Tony Galota is a tear away from Miami who falls into drugs trading and after being sent to prison in Brazil, takes many years to get back home.',
//     language: 'en',
//     whatWeDoId: '1',
//   },
//   {
//     subtitle: 'Women of Steel',
//     text: 'A new generation of women police hit the streets in one of the hardest cities in the world.',
//     language: 'en',
//     whatWeDoId: '1',
//   },
// ];

// export class BasicSetupSeed9999999999999 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await getRepository('tb_footers').save(Footers);
//     await getRepository('tb_headers').save(Headers);
//     await getRepository('tb_home').save(Home);
//     await getRepository('tb_what_we_do').save(WhatWeDo);
//     await getRepository('tb_credits').save(Credits);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {}
// }
