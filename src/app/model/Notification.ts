export class Notification{
    title: string;
    researchObjectUri: string;
    source: string;
    sourceName: string;
    id: string;
    content: string;

    constructor(title, researchObjectUri, source, sourceName, id, content){
        this.title=title;
        this.researchObjectUri=researchObjectUri;
        this.source=source;
        this.sourceName=sourceName;
        this.id=id;
        this.content=content;
    }
}