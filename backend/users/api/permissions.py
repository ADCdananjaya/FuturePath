from rest_framework.permissions import BasePermission



class IsCompanyUser(BasePermission):
    message = "Only Company members Can Publish Job"
    def has_permission(self, request, view):

        return bool(request.user and request.user.is_company)


class IsStudentUser(BasePermission):
    def has_permission(self, request, view):

        return bool(request.user and request.user.is_student)