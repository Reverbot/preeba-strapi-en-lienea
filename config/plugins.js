module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: 'bucket-strapi-donald',
            publicFiles: true,
            uniform: true,
            basePath: '',
        },
      },
    },
    email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: "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",
      },
      settings: {
        defaultFrom: 'me@donaldschiffmann.com',
        defaultReplyTo: 'me@donaldschiffmann.com',
        testAddress: 'schiffmann10@gmail.com',
      },
    },
  },
})
