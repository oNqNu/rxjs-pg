import { Observable } from 'rxjs';

const obs: Observable<number> = new Observable((sub) => {
  sub.next(1);
  sub.next(2);
  sub.error(new Error('error'));
  sub.next(3);
  sub.next(4);
  sub.complete();
});

obs.subscribe((v: number | string) => console.log(v));
