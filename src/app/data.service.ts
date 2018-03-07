import 'rxjs/add/operator/map';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/windowCount';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/takeWhile';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { zip } from 'rxjs/observable/zip';
import { expand } from 'rxjs/operators';

import { HttpHandlerService } from './http_handler.service';
import { SmsContentType, SmsMessage } from './message';
import { Thread } from './thread';
import { SmsRepository, HardCodedSmsRepository } from './sms-repository';
import { AutoGenRepository } from './autogen-repository';


@Injectable()
export class DataService {
  repo: SmsRepository;

  constructor(private http: HttpHandlerService) {
    this.repo = new AutoGenRepository(http);
  }

  getThreads(): Thread[] {
    return this.repo.getThreads();
  }

  getMessages(threadID: string): SmsMessage[] {
    return this.repo.getMessages(threadID);
  }
}