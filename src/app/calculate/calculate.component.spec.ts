import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateComponent } from './calculate.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateComponent ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correctly', () => {
    expect(component.calc(1, 2)).toBe(3);
  });

  it('should calculate correctly when button function is called', () => {
    component.clickCalcButton();
    expect(component.result).toBe(20);
  });

  it('should call clickCalcButton on click', () => {
    // Is equivalent to mocking a function
    spyOn(component, 'clickCalcButton');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.clickCalcButton).toHaveBeenCalled();
    });
  });


  it('should call calc on click with good value', () => {
    spyOn(component, 'calc');


    component.model.number1 = '20';
    component.model.number2 = '20';
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();



    fixture.whenStable().then(() => {
      expect(component.calc).toHaveBeenCalledWith(20, 20);
    });
  });

  it('should display the right result when typed the right numbers', () => {

    component.model.number1 = '20';
    fixture.detectChanges();

    component.model.number2 = '20';
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(fixture.debugElement.nativeElement.querySelector('#result').textContent).toContain('40');
    });
  });

});
