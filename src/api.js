import { Octokit } from '@octokit/core'

function getRESTClient() {
    return new Octokit()
}

export function getRepositories() {
    const octokit = getRESTClient()
    return octokit.request(
        'GET /users/{username}/repos',
        {
            "username": "helloybz",
            "type": "all"
        }
    ).then((response) => {
        var new_data = []
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
            if (['CLANE', 'Deepwalk-Clone', 'pggan-clone'].includes(response.data[i].name)) {
                new_data.push({ ...response.data[i] });
            }
        }
        return new_data
    })
}