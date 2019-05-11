export function base64ToBlob(b64Data: string, contentType: string, sliceSize: number = 512): Blob {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
}

export function getArrayFromObject(data): any[] {
    if (!data) {
        return [];
    }
    const tmpArray = [];
    Object.keys(data).forEach(uid => {
        if (typeof data[uid] === 'object') {
            tmpArray.push(Object.assign(data[uid], { uid: uid }));
        } else {
            tmpArray.push({
                value: data[uid],
                uid: uid
            });
        }
    });
    return JSON.parse(JSON.stringify(tmpArray));
}

export function getObjectFromArray(data, type?): any {
    if (!data) {
        return {};
    }
    const tmpData = JSON.parse(JSON.stringify(data));
    const tmpObj = {};
    let i = 0; // index for objects without keys
    tmpData.forEach(d => {
        let uid = d.uid;
        if (uid) {
            delete d['uid'];
        } else {
            uid = 'id' + i;
        }
        tmpObj[uid] = type === 'string' ? d.value : d;
        i++;
    });
    return tmpObj;
}

export function getFirstNameAndLastName(name) {
    const tmpNames = { firstName: null, lastName: null };
    const names = name ? name.split(' ') : [];
    tmpNames.firstName = names.length > 0 ? names[0] : null;
    tmpNames.lastName = names.length > 1 ? names.slice(1).join(' ') : null;
    return tmpNames;
}
