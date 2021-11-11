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
            "type": "public"
        }
    ).then((response) => {
        var new_data = []
        for (let i = 0; i < response.data.length; i++) {
            console.log(i, response.data[i].name)
            if (['CLANE', 'Deepwalk-Clone'].includes(response.data[i].name)) {
                new_data.push({ ...response.data[i] });
            }
        }
        console.log(new_data[0])
        return new_data
    })
}