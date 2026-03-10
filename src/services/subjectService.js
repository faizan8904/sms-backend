const db = require('../config/db');

const subjectService = {

    // Create subject
    async createSubject(data) {
        const query = `
        INSERT INTO subjects
        (
            subject_id,
            school_id,
            subject_name,
            subject_code,
            subject_short_name,
            description,
            class_id,
            section_id,
            academic_year,
            education_level,
            subject_teacher_id,
            assistant_teacher_id,
            weekly_periods,
            credit_points,
            passing_marks,
            max_marks,
            grading_system,
            has_practical,
            practical_max_marks,
            lab_required,
            classroom_required,
            status,
            is_optional,
            created_at,
            updated_at
        )
        VALUES
        (
            gen_random_uuid(), $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,NOW(),NOW()
        )
        RETURNING *`;

        const values = [
            data.school_id,
            data.subject_name,
            data.subject_code,
            data.subject_short_name,
            data.description,
            data.class_id,
            data.section_id,
            data.academic_year,
            data.education_level,
            data.subject_teacher_id || null,
            data.assistant_teacher_id || null,
            data.weekly_periods,
            data.credit_points,
            data.passing_marks,
            data.max_marks,
            data.grading_system,
            data.has_practical || false,
            data.practical_max_marks || 0,
            data.lab_required || false,
            data.classroom_required || false,
            data.status || 'active',
            data.is_optional || false
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Get subjects by class
    async getSubjectsByClass(class_id) {
        const result = await db.query(
            `SELECT * FROM subjects WHERE class_id = $1 ORDER BY subject_name`,
            [class_id]
        );
        return result.rows;
    },

    // Get subject by ID
    async getSubjectById(subject_id) {
        const result = await db.query(
            `SELECT * FROM subjects WHERE subject_id = $1`,
            [subject_id]
        );
        return result.rows[0];
    },

    // Update subject
    async updateSubject(subject_id, data) {
        const query = `
        UPDATE subjects
        SET
            subject_name=$1,
            subject_code=$2,
            subject_short_name=$3,
            description=$4,
            subject_teacher_id=$5,
            assistant_teacher_id=$6,
            weekly_periods=$7,
            credit_points=$8,
            passing_marks=$9,
            max_marks=$10,
            grading_system=$11,
            has_practical=$12,
            practical_max_marks=$13,
            lab_required=$14,
            classroom_required=$15,
            status=$16,
            is_optional=$17,
            updated_at=NOW()
        WHERE subject_id=$18
        RETURNING *`;

        const values = [
            data.subject_name,
            data.subject_code,
            data.subject_short_name,
            data.description,
            data.subject_teacher_id || null,
            data.assistant_teacher_id || null,
            data.weekly_periods,
            data.credit_points,
            data.passing_marks,
            data.max_marks,
            data.grading_system,
            data.has_practical || false,
            data.practical_max_marks || 0,
            data.lab_required || false,
            data.classroom_required || false,
            data.status || 'active',
            data.is_optional || false,
            subject_id
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Delete subject
    async deleteSubject(subject_id) {
        const result = await db.query(
            `DELETE FROM subjects WHERE subject_id = $1 RETURNING *`,
            [subject_id]
        );
        return result.rows[0];
    }
};

module.exports = subjectService;