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
  // [START composer_v1beta1_generated_Environments_CheckUpgrade_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource name of the environment to check upgrade for, in the
   *  form:
   *  "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
   */
  // const environment = 'abc123'
  /**
   *  The version of the software running in the environment.
   *  This encapsulates both the version of Cloud Composer functionality and the
   *  version of Apache Airflow. It must match the regular expression
   *  `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`.
   *  When used as input, the server also checks if the provided version is
   *  supported and denies the request for an unsupported version.
   *  The Cloud Composer portion of the image version is a full
   *  semantic version (https://semver.org), or an alias in the form of major
   *  version number or `latest`. When an alias is provided, the server replaces
   *  it with the current Cloud Composer version that satisfies the alias.
   *  The Apache Airflow portion of the image version is a full semantic version
   *  that points to one of the supported Apache Airflow versions, or an alias in
   *  the form of only major or major.minor versions specified. When an alias is
   *  provided, the server replaces it with the latest Apache Airflow version
   *  that satisfies the alias and is supported in the given Cloud Composer
   *  version.
   *  In all cases, the resolved image version is stored in the same field.
   *  See also version
   *  list (/composer/docs/concepts/versioning/composer-versions) and versioning
   *  overview (/composer/docs/concepts/versioning/composer-versioning-overview).
   */
  // const imageVersion = 'abc123'

  // Imports the Service library
  const {EnvironmentsClient} = require('@google-cloud/orchestration-airflow').v1beta1;

  // Instantiates a client
  const serviceClient = new EnvironmentsClient();

  async function callCheckUpgrade() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await serviceClient.checkUpgrade(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCheckUpgrade();
  // [END composer_v1beta1_generated_Environments_CheckUpgrade_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
