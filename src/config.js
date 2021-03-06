const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IOOfqAd94kAEi46u5Vv2JsDjyFMOP4jyyROQIN439UgLdGyu7OyUMknFJkGXlrJWzUQYY76YD3Yoym02yZap4Ce00qYUUEFHy",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-upload-landes"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://1tgb2g733a.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_EvyUMDGeW",
        APP_CLIENT_ID: "6hnhqmkrn58j16ng6l07takuee",
        IDENTITY_POOL_ID: "us-east-2:780bace6-534f-4653-92c5-44cc33f93140",
    },
};

export default config;