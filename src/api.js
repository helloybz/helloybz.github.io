import axios from 'axios';


export function getRepositories() {
    return axios.get(
        'https://asia-northeast3-github-api-332405.cloudfunctions.net/get_github_repos',
    ).then((response) => {
        var new_data = []
        for (let i = 0; i < response.data.length; i++) {
            if (['CLANE', 'deepwalk-clone', 'demucs-clone', 'pggan-clone', 'npg', 'AmSanWang'].includes(response.data[i].name)) {
                new_data.push({ ...response.data[i] });
            }
        }
        return new_data
    })
}