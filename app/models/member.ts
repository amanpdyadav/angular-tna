export enum Posts {
    MEMBER = 'ME',
    BOARDMEMBER = 'ME'
}

export class TnaMember {
    uid?: string;
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    post = Posts.MEMBER;
    isAdmin? = false;
    isBoardMember? = false;
    membershipPaid? = false;
    google?: string;
    twitter?: string;
    linkedn?: string;
    skype?: string;
    github?: string;
    facebook?: string;
    www?: string;
    profilePicture?: string;
    lastLogin?: string;
    imagePathInStore?: string;
}
