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
      keyFile: path.join(__dirname, 'path/from/your/kefile.json'),
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
        parents: [''],
      },
      media: {
        mimeType: file.mimetype,
        body: stream,
      },
    });

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
