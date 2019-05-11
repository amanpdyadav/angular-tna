import { TnaEvent, TnaEventAttendee } from './event';
import { TnaGallery } from './gallery';
import { TnaMember } from './member';
import { TnaAccount } from './account';

export * from './gallery';
export * from './member';
export * from './event';
export * from './account';

export class Data {
    members: [TnaMember];
    infos?: [any];
    events: [TnaEvent];
    galleries?: [TnaGallery];
    accounts: [TnaAccount];
    eventAttendees: [TnaEventAttendee];
}
