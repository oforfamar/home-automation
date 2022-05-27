export const getPublishTopicSet = name => `${process.env.TOPIC_NAME}/${name}/set`;

export const getPublishTopicGet = name => `${process.env.TOPIC_NAME}/${name}/get`;

export const getSubscribeTopic = name => `${process.env.TOPIC_NAME}/${name}`;
