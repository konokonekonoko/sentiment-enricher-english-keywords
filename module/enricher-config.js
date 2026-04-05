const patterns = [
    [
        /(level|lvl?) ?\d+/gi, {
            classes: ["numbers"],
        },
    ],
    [
        /IGNIT(ED?|ING)/g, {
            classes: ["ignite"],
            strFormat: {
                case: "title",
            },
        },
    ],
    [
        /LOCK(ING|ED)?( ?OUT)?/g, {
            classes: ["lock"],
            strFormat: {
                case: "title",
            },
        },
    ],
    [
        /EXHAUST(ED)?/g, {
            classes: ["exhaust"],
            strFormat: {
                case: "title",
            },
        },
    ],
    [
        /WOUND(ING|ED)?/g, {
            classes: ["wound"],
            strFormat: {
                case: "title",
            },
        },
    ],
    [
        /AFFINIT(Y|IES)/g, {
            classes: ["affinity"],
            strFormat: {
                case: "title",
            },
        },
    ],
    [
        /PRIMARY/g, {
            classes: ["primary"],
            strFormat: {
                case: "title",
            },
        },
    ],
    [
        /LINKS?/g, {
            classes: ["link"],
            strFormat: {
                case: "title",
            },
        },
    ],
    [
        /ATTRIBUTES?/g, {
            classes: ["attribute"],
            strFormat: {
                case: "title",
            },
        },
    ],
    [
        /Roll to Do/g, {
            classes: ["rolltodo"],
        },
    ],
    [
        /Roll to Dye/g, {
            classes: ["rolltodye"],
        },
    ],
];

const output = {
    displayName: "English Keywords",
    patterns
};
export default output;
