import { ArtifactsApi } from './src';

const artifactApi = new ArtifactsApi()

artifactApi.listArtifactsInGroup({groupId: "default"}).then((resp) => {
	console.log(resp);
}).catch(err => {
	console.error(err);
})