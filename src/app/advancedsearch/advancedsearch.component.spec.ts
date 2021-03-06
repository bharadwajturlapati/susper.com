/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdvancedsearchComponent } from './advancedsearch.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {reducer} from '../reducers/index';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from '../app.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {IndexComponent} from '../index/index.component';
import {ResultsComponent} from '../results/results.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';

describe('AdvancedsearchComponent', () => {
  let component: AdvancedsearchComponent;
  let fixture: ComponentFixture<AdvancedsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        IndexComponent,
        ResultsComponent,
        NotFoundComponent,
        AdvancedsearchComponent,
        SearchBarComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
