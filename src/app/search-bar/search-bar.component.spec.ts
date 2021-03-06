/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchBarComponent } from './search-bar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from '../reducers/index';
import {AppComponent} from '../app.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {IndexComponent} from '../index/index.component';
import {ResultsComponent} from '../results/results.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {AdvancedsearchComponent} from '../advancedsearch/advancedsearch.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

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
      ]    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input element for search inputs', () => {
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div.input-group input#nav-input'));
  });

  it('should focus the input search element on initialization', () => {
    let compiled = fixture.debugElement.nativeElement;
    let inputElement: HTMLInputElement = compiled.querySelector('div.input-group input#nav-input');
    expect(document.activeElement).toBe(inputElement);
  });

   it('should have "searchdata" property', () => {
     let compiled = fixture.debugElement.nativeElement;

     expect(component.searchdata).toBeTruthy();
   });

});
