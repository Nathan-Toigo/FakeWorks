PROJECT_ID=polytech-dijon
gcloud auth login
gcloud config set project $PROJECT_ID
gcloud auth configure-docker europe-west1-docker.pkg.dev