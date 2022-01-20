// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START datastream_v1alpha1_generated_Datastream_DiscoverConnectionProfile_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the ConnectionProfile type. Must be in the
   *  format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  An ad-hoc ConnectionProfile configuration.
   */
  // const connectionProfile = {}
  /**
   *  A reference to an existing ConnectionProfile.
   */
  // const connectionProfileName = 'abc123'
  /**
   *  Whether to retrieve the full hierarchy of data objects (TRUE) or only the
   *  current level (FALSE).
   */
  // const recursive = true
  /**
   *  The number of hierarchy levels below the current level to be retrieved.
   */
  // const recursionDepth = 1234
  /**
   *  Oracle RDBMS to enrich with child data objects and metadata.
   */
  // const oracleRdbms = {}
  /**
   *  MySQL RDBMS to enrich with child data objects and metadata.
   */
  // const mysqlRdbms = {}

  // Imports the Datastream library
  const {DatastreamClient} = require('@google-cloud/datastream').v1alpha1;

  // Instantiates a client
  const datastreamClient = new DatastreamClient();

  async function callDiscoverConnectionProfile() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await datastreamClient.discoverConnectionProfile(request);
    console.log(response);
  }

  callDiscoverConnectionProfile();
  // [END datastream_v1alpha1_generated_Datastream_DiscoverConnectionProfile_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
