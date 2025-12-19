from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import RegisterSerializer, LoginSerializer


@api_view(["POST"])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "account created"})

    return Response(serializer.errors, status=400)


@api_view(["POST"])
def login_user(request):
    serializer = LoginSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.validated_data

        return Response({
            "username": user.username,
            "email": user.email,
        })

    return Response(serializer.errors, status=400)
