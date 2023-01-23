// Copyright 2023 Google LLC
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

function main(control) {
  // [START retail_v2alpha_generated_ControlService_UpdateControl_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Control to update.
   */
  // const control = {}
  /**
   *  Indicates which fields in the provided
   *  Control google.cloud.retail.v2alpha.Control  to update. The following are
   *  NOT supported:
   *  * Control.name google.cloud.retail.v2alpha.Control.name 
   *  If not set or empty, all supported fields are updated.
   */
  // const updateMask = {}

  // Imports the Retail library
  const {ControlServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new ControlServiceClient();

  async function callUpdateControl() {
    // Construct request
    const request = {
      control,
    };

    // Run request
    const response = await retailClient.updateControl(request);
    console.log(response);
  }

  callUpdateControl();
  // [END retail_v2alpha_generated_ControlService_UpdateControl_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
