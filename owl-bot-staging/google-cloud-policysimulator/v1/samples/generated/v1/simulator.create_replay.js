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

function main(parent, replay) {
  // [START policysimulator_v1_generated_Simulator_CreateReplay_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource where this
   *  Replay google.cloud.policysimulator.v1.Replay  will be created. This
   *  resource must be a project, folder, or organization with a location.
   *  Example: `projects/my-example-project/locations/global`
   */
  // const parent = 'abc123'
  /**
   *  Required. The Replay google.cloud.policysimulator.v1.Replay  to create.
   *  Set `Replay.ReplayConfig` to configure the replay.
   */
  // const replay = {}

  // Imports the Policysimulator library
  const {SimulatorClient} = require('@google-cloud/policysimulator').v1;

  // Instantiates a client
  const policysimulatorClient = new SimulatorClient();

  async function callCreateReplay() {
    // Construct request
    const request = {
      parent,
      replay,
    };

    // Run request
    const [operation] = await policysimulatorClient.createReplay(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateReplay();
  // [END policysimulator_v1_generated_Simulator_CreateReplay_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
