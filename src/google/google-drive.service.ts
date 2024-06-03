import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { Readable } from 'stream';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GoogleDriveService {
  private driveClient;

  constructor() {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, '../../testbigtable-422005-1228d0c872a1.json'),
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    this.driveClient = google.drive({ version: 'v3', auth });
  }

  async uploadFile(file: Express.MulterFile): Promise<string> {
    const { originalname, buffer } = file;
    const stream = Readable.from(buffer);

    const response = await this.driveClient.files.create({
      requestBody: {
        name: originalname,
        parents: ['1lP7DjHgy4SYbSY_D1Gic3Aj0isGWYHyz'],
      },
      media: {
        mimeType: file.mimetype,
        body: stream,
      },
    });

    //https://drive.google.com/drive/folders/1lP7DjHgy4SYbSY_D1Gic3Aj0isGWYHyz?usp=sharing
    const fileId = response.data.id;

    await this.driveClient.permissions.create({
      fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    return `https://drive.google.com/thumbnail?id=${fileId}`;
  }
}
