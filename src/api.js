import axios from 'axios';


const target_reposotory = [
    'CLANE',
    'deepwalk-clone',
    // 'demucs-clone',
    // 'pggan-clone',
    'NPG',
    // 'AmSanWang',
]


export function getRepositories() {
    return axios.get(
        'https://asia-northeast3-github-api-332405.cloudfunctions.net/get_github_repos',
    ).then((response) => {
        var new_data = []
        for (let i = 0; i < response.data.length; i++) {
            if (target_reposotory.includes(response.data[i].name)) {
                new_data.push({ ...response.data[i] });
            }
        }
        return new_data
    })
}