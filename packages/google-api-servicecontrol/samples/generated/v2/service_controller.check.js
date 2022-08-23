// Copyright 2022 Google LLC
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

function main() {
  // [START servicecontrol_v2_generated_ServiceController_Check_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The service name as specified in its service configuration. For example,
   *  `"pubsub.googleapis.com"`.
   *  See
   *  google.api.Service (https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
   *  for the definition of a service name.
   */
  // const serviceName = 'abc123'
  /**
   *  Specifies the version of the service configuration that should be used to
   *  process the request. Must not be empty. Set this field to 'latest' to
   *  specify using the latest configuration.
   */
  // const serviceConfigId = 'abc123'
  /**
   *  Describes attributes about the operation being executed by the service.
   */
  // const attributes = {}
  /**
   *  Describes the resources and the policies applied to each resource.
   */
  // const resources = 1234
  /**
   *  Optional. Contains a comma-separated list of flags.
   */
  // const flags = 'abc123'

  // Imports the Servicecontrol library
  const {ServiceControllerClient} = require('@google-cloud/servicecontrol').v2;

  // Instantiates a client
  const servicecontrolClient = new ServiceControllerClient();

  async function callCheck() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await servicecontrolClient.check(request);
    console.log(response);
  }

  callCheck();
  // [END servicecontrol_v2_generated_ServiceController_Check_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
