import {createTag, getTagByName} from "../dal/entities-connectors";

export const resolvers = {
    //TODO: create resolvers
    Query: {
        foo(obj: any, args: any, context: any, info: any) {
            return 'bar';
        },
    },
};

//TODO: use this function in one of the resolvers
function getTagsFromBody(body: string): Tag[] {
    const tagsFromBody = body.match(/#[A-Za-z0-9]+/g);
    const tags: Tag[] = [];

    if (tagsFromBody !== null) {
        tagsFromBody.map(hashtag => hashtag.substring(1)).forEach(function (tagName) {
            if (getTagByName(tagName) === undefined) {
                createTag(tagName);
            }
            const tag: Tag = getTagByName(tagName) as Tag;
            tags.push(tag);
        });
    }
    return tags;
}
