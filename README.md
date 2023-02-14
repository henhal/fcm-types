# fcm-types
Type definitions for FCM (Firebase Cloud Messaging)

## Description
This is a zero dependency module with only type definitions for FCM messages.

If you only need the types for your APIs or similar and don't want to add a dependency to the official admin.messaging client 
implementation from Google, this module is for you!
It's also useful if you're using AWS SNS to send messages but want to build FCM (or [APNS](https://www.npmjs.com/package/apns-types)) payloads.

References:

* https://firebase.google.com/docs/cloud-messaging/http-server-ref

See also: 
* https://www.npmjs.com/package/apns-types
* https://firebase.google.com/docs/reference/admin/node/firebase-admin.messaging
* https://www.npmjs.com/package/firebase-admin
* https://docs.aws.amazon.com/sns/latest/dg/sns-send-custom-platform-specific-payloads-mobile-devices.html

## Installation

```
npm install fcm-types
```

or

```
yarn add fcm-types
```

## Example usage

```
import {Fcm} from 'fcm-types';

interface MyAppPushNotification {
  myCustomField: string;
  someOtherField?: string;
  fcm: Fcm;
}

const n: MyAppPushNotification = {
  myCustomField: 'Hello, world!',
  fcm: {
    notification: {
      title: 'Title',
      body: 'Body'
    },
    priority: 'high'
  }
};
```