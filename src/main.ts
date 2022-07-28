import { of } from 'rxjs';

const obs = of(1, 2, 3);
obs.subscribe(console.log); // 1,2,3 (3 times)
