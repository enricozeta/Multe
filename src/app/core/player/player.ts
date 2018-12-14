import { Multa } from '../multa/multa';

export class Player {
  id: number;
  displayName: string;
  multe: Multa[];
  multePagate: any;
  multeNonPagate: any;
  name: string;
  surname: string;
  teamId: string;
  total: number;
}
