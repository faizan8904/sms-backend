const db = require('../config/db');

const attendanceService = {

    // Mark attendance
    async markAttendance(data) {
        const query = `
        INSERT INTO attendance
        (
            attendance_id,
            school_id,
            class_id,
            section_id,
            academic_year,
            attendance_date,
            student_id,
            attendance_status,
            check_in_time,
            check_out_time,
            leave_type,
            leave_reason,
            approved_by,
            period_number,
            subject_id,
            teacher_id,
            total_students,
            present_count,
            absent_count,
            late_count,
            biometric_device_id,
            gps_location,
            attendance_source,
            status,
            verified_by,
            marked_by,
            created_at,
            updated_at
        )
        VALUES
        (
            gen_random_uuid(), $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,NOW(),NOW()
        )
        RETURNING *`;

        const values = [
            data.school_id,
            data.class_id,
            data.section_id,
            data.academic_year,
            data.attendance_date,
            data.student_id,
            data.attendance_status || 'present',
            data.check_in_time || null,
            data.check_out_time || null,
            data.leave_type || null,
            data.leave_reason || null,
            data.approved_by || null,
            data.period_number || null,
            data.subject_id || null,
            data.teacher_id || null,
            data.total_students || null,
            data.present_count || null,
            data.absent_count || null,
            data.late_count || null,
            data.biometric_device_id || null,
            data.gps_location || null,
            data.attendance_source || 'manual',
            data.status || 'active',
            data.verified_by || null,
            data.marked_by || null
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Get attendance by student
    async getAttendanceByStudent(student_id) {
        const result = await db.query(
            `SELECT * FROM attendance WHERE student_id=$1 ORDER BY attendance_date DESC`,
            [student_id]
        );
        return result.rows;
    },

    // Get attendance by class & date
    async getAttendanceByClassDate(class_id, section_id, date) {
        const result = await db.query(
            `SELECT * FROM attendance WHERE class_id=$1 AND section_id=$2 AND attendance_date=$3 ORDER BY student_id`,
            [class_id, section_id, date]
        );
        return result.rows;
    },

    // Update attendance
    async updateAttendance(attendance_id, data) {
        const query = `
        UPDATE attendance
        SET
            attendance_status=$1,
            check_in_time=$2,
            check_out_time=$3,
            leave_type=$4,
            leave_reason=$5,
            approved_by=$6,
            period_number=$7,
            subject_id=$8,
            teacher_id=$9,
            total_students=$10,
            present_count=$11,
            absent_count=$12,
            late_count=$13,
            biometric_device_id=$14,
            gps_location=$15,
            attendance_source=$16,
            status=$17,
            verified_by=$18,
            marked_by=$19,
            updated_at=NOW()
        WHERE attendance_id=$20
        RETURNING *`;

        const values = [
            data.attendance_status,
            data.check_in_time,
            data.check_out_time,
            data.leave_type,
            data.leave_reason,
            data.approved_by,
            data.period_number,
            data.subject_id,
            data.teacher_id,
            data.total_students,
            data.present_count,
            data.absent_count,
            data.late_count,
            data.biometric_device_id,
            data.gps_location,
            data.attendance_source,
            data.status,
            data.verified_by,
            data.marked_by,
            attendance_id
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Delete attendance
    async deleteAttendance(attendance_id) {
        const result = await db.query(
            `DELETE FROM attendance WHERE attendance_id=$1 RETURNING *`,
            [attendance_id]
        );
        return result.rows[0];
    }
};

module.exports = attendanceService;