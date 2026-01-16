import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendPartyPage } from './weekend-party-page';

describe('WeekendPartyPage', () => {
  let component: WeekendPartyPage;
  let fixture: ComponentFixture<WeekendPartyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekendPartyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekendPartyPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
