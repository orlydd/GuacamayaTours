import { Component, OnInit, Input } from '@angular/core';
import {StateService} from 'src/app/services/state/state.service';
import {States} from 'src/app/models/state';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss']
})
export class StateListComponent implements OnInit {

  states : States[];
  constructor(private statesService: StateService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.statesService.getStates().subscribe(
      states=>{
        this.states = states;
      }
    )
  }

  isActive(s: States){
    s.active =!s.active;
    this.statesService.updateState(s);
  }

  onEdit(s: States){
    let state = Object.assign({}, s);
    this.statesService.stateData= state;
  }

}
