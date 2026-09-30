# CircleCI Cloud CI/CD Lab

## Objective
Demonstrate a cloud-based CI/CD pipeline using CircleCI with GitHub.

## Pipeline
test -> build -> deliver

- **test**: checkout, install, run automated tests
- **build**: create the `dist/` delivery package
- **deliver**: receive the build output and publish it as a CircleCI artifact

## Run locally
```bash
npm ci
npm test
npm run build
```

## CircleCI setup
1. Push this repository to GitHub.
2. Create/sign in to CircleCI and connect GitHub.
3. Set up the project.
4. CircleCI reads `.circleci/config.yml`.
5. Push a commit to trigger the pipeline.
6. Record screenshots of:
   - Pipeline overview
   - Test job success
   - Build job success
   - Deliver job and Artifacts tab

## Important
The `deliver` stage demonstrates continuous delivery by making the built package available as a CircleCI artifact. It does not deploy to a production server.
