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

function main() {
  // [START cloudkms_v1_generated_KeyManagementService_GenerateRandomBytes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The project-specific location in which to generate random bytes.
   *  For example, "projects/my-project/locations/us-central1".
   */
  // const location = 'abc123'
  /**
   *  The length in bytes of the amount of randomness to retrieve.  Minimum 8
   *  bytes, maximum 1024 bytes.
   */
  // const lengthBytes = 1234
  /**
   *  The ProtectionLevel google.cloud.kms.v1.ProtectionLevel  to use when
   *  generating the random data. Currently, only
   *  HSM google.cloud.kms.v1.ProtectionLevel.HSM  protection level is
   *  supported.
   */
  // const protectionLevel = {}

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callGenerateRandomBytes() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await kmsClient.generateRandomBytes(request);
    console.log(response);
  }

  callGenerateRandomBytes();
  // [END cloudkms_v1_generated_KeyManagementService_GenerateRandomBytes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
