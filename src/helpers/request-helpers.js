const extractFormData = (data) => {
    if (!data) return {};

    let formData = {};
    for (let [key, value] of data.entries()) {
        formData[key] = value;
    }

    return formData;
};

export {
    extractFormData,
};
