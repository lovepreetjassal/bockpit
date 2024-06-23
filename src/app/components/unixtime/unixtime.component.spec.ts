import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnixtimeComponent } from './unixtime.component';

describe('UnixtimeComponent', () => {
  let component: UnixtimeComponent;
  let fixture: ComponentFixture<UnixtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnixtimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnixtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
