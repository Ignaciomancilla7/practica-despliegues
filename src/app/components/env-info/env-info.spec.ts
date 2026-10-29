import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvInfo } from './env-info';

describe('EnvInfo', () => {
  let component: EnvInfo;
  let fixture: ComponentFixture<EnvInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
