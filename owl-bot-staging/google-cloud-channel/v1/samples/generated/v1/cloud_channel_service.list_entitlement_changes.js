// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START cloudchannel_v1_generated_CloudChannelService_ListEntitlementChanges_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the entitlement for which to list
   *  entitlement changes. The `-` wildcard may be used to match entitlements
   *  across a customer. Formats:
   *    * accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
   *    * accounts/{account_id}/customers/{customer_id}/entitlements/-
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of entitlement changes to return. The service
   *  may return fewer than this value. If unspecified, returns at most 10
   *  entitlement changes. The maximum value is 50; the server will coerce values
   *  above 50.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous
   *  CloudChannelService.ListEntitlementChanges google.cloud.channel.v1.CloudChannelService.ListEntitlementChanges 
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  CloudChannelService.ListEntitlementChanges google.cloud.channel.v1.CloudChannelService.ListEntitlementChanges 
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Filters applied to the list results.
   */
  // const filter = 'abc123'

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function callListEntitlementChanges() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = channelClient.listEntitlementChangesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListEntitlementChanges();
  // [END cloudchannel_v1_generated_CloudChannelService_ListEntitlementChanges_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
