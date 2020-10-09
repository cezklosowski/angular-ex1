import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToCheckComponent } from './text-to-check.component';

describe('TextToCheckComponent', () => {
  let component: TextToCheckComponent;
  let fixture: ComponentFixture<TextToCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
