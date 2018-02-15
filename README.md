# kubernetes-snippets
Code snippets of kubernetes for visual studio code.

This image shows an example of what you can do with this extension. In 3 words: typing very fast!

![Kubernetes extension example](https://raw.githubusercontent.com/ipedrazas/kubernetes-snippets/master/images/kubernetes-extension.gif "Kubernetes Extension example")

To create secrets, we can just use the template and write them in plain text. Using the key combination of Cmd+k, Cmd+E if you're in OSX (Ctrl if you're in linux/windows) you can encode to Base64.

![Kubernetes Secrets example](https://raw.githubusercontent.com/ipedrazas/kubernetes-snippets/master/images/secrets-extension.gif "Kubernetes Extension example")

You want to decode a secret, the key combination is Cmd + K, Cmd + D.

There are snippets to quickly create `pods`, `services`, `deployments`,etc. As well, there are snippets to 
quickly add parts of the descriptor like `ports`, `cmd` and `volumes`  

For example, if you start typing `deployment` a suggestion will be shown (`deployment, deployment_simple`), if you expand the snippet you will get something like this:

        apiVersion: extensions/v1beta1
        kind: Deployment
        metadata:
        name: Enter deployment name
        spec:
        replicas: Enter the number of replicas
        template:
            metadata:
            labels:
                editor: vscode
            spec:
            containers:
            - name: name
                image: Enter containers image

The template allow to quickly add the name of the Deployment, number of replicas and, the image of the container. The Deployment and the container use the same name.

Once you have the template filled, you can add `ports` using the `ports` snippet, for example.

        apiVersion: extensions/v1beta1
        kind: Deployment
        metadata:
        name: nginx-test
        spec:
        replicas: 1
        template:
            metadata:
            labels:
                editor: vscode
            spec:
            containers:
            - name: nginx-test
                image: nginx
                ports:
                - name: nginx
                port: 80
                protocol: TCP



### Extension incompatibillity
This extension is not compatible with the following extensions:

 * vs-kubernetes
 * vscode-helm