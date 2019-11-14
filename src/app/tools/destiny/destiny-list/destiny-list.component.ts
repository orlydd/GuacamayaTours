import { Component, OnInit, Input } from '@angular/core';
import {DestinyService} from 'src/app/services/destiny/destiny.service';
import {Destiny} from 'src/app/models/destiny.model';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.scss']
})
export class DestinyListComponent implements OnInit {
 
  
  destiny: Destiny[];

  constructor(private destinyService: DestinyService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.destinyService.getDestinies().subscribe(
      destiny=>{
        this.destiny = destiny;
      }
    );


    /*
    this.destinyService.getDestinies().subscribe(actionArray=>{
      this.destiny= actionArray.map(item=>{
        return{key: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Destiny;
      })
    })
    */
  }

  isActive(d: Destiny){
    d.active = !d.active;
    this.destinyService.updateDestiny(d);
  }

  onEdit(dest: Destiny){
    let destiny = Object.assign({}, dest);
    this.destinyService.destinyData= destiny;
  }
  onDelete(key:string){
    //if(confirm("¿Esta seguro que quiere eliminar este destino?")){
      this.firestore.doc('Destiny/'+key).delete();
   // }
  }
  
 
 
 
 

}
