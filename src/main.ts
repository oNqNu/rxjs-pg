import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const obs: Observable<number> = of(1, 2, 3).pipe(
  map((inputNum) => inputNum * inputNum)
);

obs.subscribe((v: number) => console.log(v));
