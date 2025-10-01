# Azure DevOps CI/CD Pipelines

This repository uses **Classic Build and Release Pipelines** in Azure DevOps to build and deploy the application to an Azure App Service.

---

## 🚀 Build Pipeline (Classic)

### Tasks

1. **Get sources**  
   - Default source retrieval from the repository.

2. **Node Tool Installer**  
   - Version: `22.x` (Node.js 22 LTS)

3. **npm install**  
   - Command: `install`

4. **npm build**  
   - Command: `custom`  
   - Custom command: `run build`

5. **Publish Build Artifacts**  
   - Path to publish: `$(Build.SourcesDirectory)/build`  
   - Artifact name: `drop`  
   - Artifact type: `Server`

---

## 🚀 Release Pipeline (Classic)

The release pipeline contains tasks that deploy the build artifact to Azure App Service.

### Tasks in a Stage

1. **Azure App Service Deploy**  
   - **Azure subscription**: Select your configured service connection  
   - **App Service name**: `<your-app-service-name>`  
   - **Package or folder**:  
     ```
     $(System.DefaultWorkingDirectory)/_<buildDefinitionName>/drop
     ```
     (This points to the build artifact)

---

## 🔧 Notes

- Ensure your **Azure Service Connection** is configured under Project Settings → Service connections.  
- Replace `<your-app-service-name>` with your actual Azure App Service name.  
- The artifact name (`drop`) must match between **Build** and **Release** pipelines.
