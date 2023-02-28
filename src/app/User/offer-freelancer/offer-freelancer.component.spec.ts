import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFreelancerComponent } from './offer-freelancer.component';

describe('OfferFreelancerComponent', () => {
  let component: OfferFreelancerComponent;
  let fixture: ComponentFixture<OfferFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
