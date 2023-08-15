import { MigrationInterface, QueryRunner } from "typeorm";

export class whatwedo1675530858396 implements MigrationInterface {
    name = 'whatwedo1675530858396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tb_headers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`image_url\` varchar(255) NOT NULL, \`text_color\` varchar(255) NOT NULL, \`background_color\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_header_links\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`label\` varchar(255) NOT NULL, \`header_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_who_we_are\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`banner_url\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`text\` text NOT NULL, \`quote\` varchar(255) NOT NULL, \`quote_author\` varchar(255) NOT NULL, \`team_title\` varchar(255) NOT NULL, \`credit_title\` varchar(255) NOT NULL, \`header_id\` varchar(255) NOT NULL, \`rdn_title\` varchar(255) NOT NULL, \`rdn_description\` varchar(255) NOT NULL, \`client_review_title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_team_people\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`position\` varchar(255) NOT NULL, \`resume\` varchar(255) NOT NULL, \`url\` varchar(255) NULL, \`photo_url\` varchar(255) NOT NULL, \`who_we_are_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_rdn\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`person_name\` varchar(255) NOT NULL, \`text\` text NOT NULL, \`url\` varchar(255) NULL, \`who_we_are_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_what_we_do\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`banner_url\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`text\` text NOT NULL, \`credit_title\` varchar(255) NOT NULL, \`header_id\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_footer_links\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`link\` varchar(255) NOT NULL, \`image_url\` varchar(255) NOT NULL, \`label\` varchar(255) NOT NULL, \`footer_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_footers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`copyright\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_news\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`image_url\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`text\` text NOT NULL, \`background_color\` varchar(255) NULL, \`text_color\` varchar(255) NULL, \`news_id\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_home\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`video_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_whats_happenings\` (\`id\` int NOT NULL AUTO_INCREMENT, \`language\` enum ('en', 'br') NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`banner_url\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 0, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tb_header_links\` ADD CONSTRAINT \`FK_9ed0dbe2a8a84fceff91de70a72\` FOREIGN KEY (\`header_id\`) REFERENCES \`tb_headers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_team_people\` ADD CONSTRAINT \`FK_d1149d430e4bc67c9a8b9d8dce9\` FOREIGN KEY (\`who_we_are_id\`) REFERENCES \`tb_who_we_are\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_rdn\` ADD CONSTRAINT \`FK_044337eb7f802e643b7ef4fc86b\` FOREIGN KEY (\`who_we_are_id\`) REFERENCES \`tb_who_we_are\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_client_reviews\` ADD CONSTRAINT \`FK_7228c05c292cb5559a52e5c6c98\` FOREIGN KEY (\`who_we_are_id\`) REFERENCES \`tb_who_we_are\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_awards\` ADD CONSTRAINT \`FK_3446fcf7b49505b99e477419c0e\` FOREIGN KEY (\`documentary_id\`) REFERENCES \`tb_documentaries\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_awards\` ADD CONSTRAINT \`FK_a0e159ed6ab5be458f20917edca\` FOREIGN KEY (\`who_we_are_id\`) REFERENCES \`tb_who_we_are\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_credits\` ADD CONSTRAINT \`FK_5f8e61de4caad3e4f85f2d31bfe\` FOREIGN KEY (\`what_we_do_id\`) REFERENCES \`tb_what_we_do\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_documentaries\` ADD CONSTRAINT \`FK_a3b1a41cfbd14cfc75c02ed6414\` FOREIGN KEY (\`what_we_do_id\`) REFERENCES \`tb_what_we_do\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_footer_links\` ADD CONSTRAINT \`FK_e717a2b9578ca20e879a9bc8290\` FOREIGN KEY (\`footer_id\`) REFERENCES \`tb_footers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tb_footer_links\` DROP FOREIGN KEY \`FK_e717a2b9578ca20e879a9bc8290\``);
        await queryRunner.query(`ALTER TABLE \`tb_documentaries\` DROP FOREIGN KEY \`FK_a3b1a41cfbd14cfc75c02ed6414\``);
        await queryRunner.query(`ALTER TABLE \`tb_credits\` DROP FOREIGN KEY \`FK_5f8e61de4caad3e4f85f2d31bfe\``);
        await queryRunner.query(`ALTER TABLE \`tb_awards\` DROP FOREIGN KEY \`FK_a0e159ed6ab5be458f20917edca\``);
        await queryRunner.query(`ALTER TABLE \`tb_awards\` DROP FOREIGN KEY \`FK_3446fcf7b49505b99e477419c0e\``);
        await queryRunner.query(`ALTER TABLE \`tb_client_reviews\` DROP FOREIGN KEY \`FK_7228c05c292cb5559a52e5c6c98\``);
        await queryRunner.query(`ALTER TABLE \`tb_rdn\` DROP FOREIGN KEY \`FK_044337eb7f802e643b7ef4fc86b\``);
        await queryRunner.query(`ALTER TABLE \`tb_team_people\` DROP FOREIGN KEY \`FK_d1149d430e4bc67c9a8b9d8dce9\``);
        await queryRunner.query(`ALTER TABLE \`tb_header_links\` DROP FOREIGN KEY \`FK_9ed0dbe2a8a84fceff91de70a72\``);
        await queryRunner.query(`DROP TABLE \`tb_users\``);
        await queryRunner.query(`DROP TABLE \`tb_whats_happenings\``);
        await queryRunner.query(`DROP TABLE \`tb_home\``);
        await queryRunner.query(`DROP TABLE \`tb_news\``);
        await queryRunner.query(`DROP TABLE \`tb_footers\``);
        await queryRunner.query(`DROP TABLE \`tb_footer_links\``);
        await queryRunner.query(`DROP TABLE \`tb_what_we_do\``);
        await queryRunner.query(`DROP TABLE \`tb_rdn\``);
        await queryRunner.query(`DROP TABLE \`tb_team_people\``);
        await queryRunner.query(`DROP TABLE \`tb_who_we_are\``);
        await queryRunner.query(`DROP TABLE \`tb_header_links\``);
        await queryRunner.query(`DROP TABLE \`tb_headers\``);
    }

}
