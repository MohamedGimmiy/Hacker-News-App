/* import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as range from 'lodash';
import { ItemService } from './item.service';
import { Items } from 'src/app/models/items';
import { Item } from 'src/app/models/item';

@Injectable()
export class ItemServiceMock extends ItemService {


    // loading subset of items :D
    load(offset?: number, limit?: number): Observable<Items> {
        const results: Item[] = range(offset, offset + limit).
            map(index => ({
                id: index,
                title: `Item ${index + 1}`,
                url: `http://www.example.com/item${index}`,
                by: `demo`,
                time: new Date().getTime() / 1000,
                score: index,
            }));

        return of({
            offset,
            limit,
            total: offset + limit,
            results
        });
    }
} */