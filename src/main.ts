import { Observable } from 'rxjs';

const obs: Observable<number> = new Observable((sub) => {
  sub.next(1);
  sub.next(2);
  sub.next(3);
  sub.complete();
});

obs.subscribe((v: number) => console.log(v));
