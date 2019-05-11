export class TnaEvent {
    adultPrice = 0;
    kidPrice = 0;
    date: string;
    description: string;
    expiryDate: string;
    familyPrice = 0;
    image: string;
    registrationRequired = false;
    address: string;
    owner: string;
    title: string;
    uid?: string;
}

export class TnaEventAttendee {
    total = 0;
    paymentReminderSent: string;
    name: string;
    kids = 0;
    email: string;
    phone: string;
    paid: string;
    address: string;
    families = 0;
    adults = 0;
    vegetarians = 0;
    owner: string;
    uid?: string;
}
