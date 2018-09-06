export class FormData {
    firstName: any = '';
    lastName: any = '';
    email: any = '';
    contact_no: any = '';
    musicFeedback: any = '';
    movieFeedback: any = '';
    feedsFeedback: any = '';

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.contact_no = '';
        this.musicFeedback = '';
        this.movieFeedback = '';
        this.feedsFeedback = '';
    }
}

export class Personal {
    firstName: any = '';
    lastName: any = '';
    email: any = '';
    contact_no: any = '';
}

export class Music {
    musicFeedback: any = '';
}

export class Movie {
    movieFeedback: any = '';
}

export class Feeds {
    feedsFeedback: any = '';
}